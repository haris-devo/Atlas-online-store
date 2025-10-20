import { useEffect, useRef, useState } from 'react';
import { HOVER_DELAY } from '../constants/dropdownConstants';

type UseDropdownStateProps = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export function useDropdownState({ isOpen, onClose }: UseDropdownStateProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>(
    null,
  );
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current
        && !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isOpen, onClose]);

  const handleDepartmentHover = (departmentId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredDepartment(departmentId);
  };

  const handleDepartmentLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDepartment(null);
    }, HOVER_DELAY);
  };

  const handleMainContentMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return {
    dropdownRef,
    hoveredDepartment,
    handleDepartmentHover,
    handleDepartmentLeave,
    handleMainContentMouseEnter,
  };
}
