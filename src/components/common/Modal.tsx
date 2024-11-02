import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/Modal.module.scss';
import useLayoutStore from '@/store/layoutStore';

interface Position {
  x: number;
  y: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const { modalPosition, setModalPosition } = useLayoutStore();

  // Constants for snapping thresholds
  const SNAP_THRESHOLD_VW = 3; // 3% of viewport width
  const SNAP_THRESHOLD_VH = 3; // 3% of viewport height

  // Function to calculate the center position of the modal
  const getCenterPosition = () => {
    if (modalRef.current) {
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;
      const centerX = (window.innerWidth - modalWidth) / 2;
      const centerY = (window.innerHeight - modalHeight) / 2;
      return { x: centerX, y: centerY };
    }
    return { x: 0, y: 0 };
  };

  // Function to get snapping thresholds in pixels
  const getSnapThresholds = () => {
    const snapThresholdX = (SNAP_THRESHOLD_VW / 100) * window.innerWidth;
    const snapThresholdY = (SNAP_THRESHOLD_VH / 100) * window.innerHeight;
    return { snapThresholdX, snapThresholdY };
  };

  // Function to determine if the modal is within the snap threshold of the center
  const isModalInCenter = () => {
    if (!modalRef.current) return false;

    const centerPosition = getCenterPosition();
    const { snapThresholdX, snapThresholdY } = getSnapThresholds();

    const deltaX = Math.abs(modalPosition.x - centerPosition.x);
    const deltaY = Math.abs(modalPosition.y - centerPosition.y);

    return deltaX <= snapThresholdX && deltaY <= snapThresholdY;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      setIsDragging(true);
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && modalRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const modalWidth = modalRef.current.offsetWidth;
      const modalHeight = modalRef.current.offsetHeight;

      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Limit horizontal movement
      newX = Math.max(0, Math.min(newX, screenWidth - modalWidth));

      // Limit vertical movement
      newY = Math.max(0, Math.min(newY, screenHeight - modalHeight));

      // Update modal position immediately
      setModalPosition(newX, newY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // After dragging, check if the modal is within the snap threshold
    if (isModalInCenter()) {
      // Snap to center
      const centerPosition = getCenterPosition();
      setModalPosition(centerPosition.x, centerPosition.y);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, offset, modalPosition]);

  if (!isOpen) return null;

  const centerPosition = getCenterPosition();

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onMouseUp={handleMouseUp}
    >
      {/* Show center outline only when modal is being dragged */}
      {isDragging && modalRef.current && (
        <div
          className={styles.centerOutline}
          style={{
            width: modalRef.current.offsetWidth,
            height: modalRef.current.offsetHeight,
            left: centerPosition.x,
            top: centerPosition.y,
          }}
        />
      )}

      <div
        className={`${styles.modalContent} ${
          isDragging ? styles.dragging : ''
        } midnightBlur`}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'absolute',
          left: modalPosition.x,
          top: modalPosition.y,
        }}
        onMouseDown={handleMouseDown}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
