'use client';

import { DefaultContent } from './components/DefaultContent';
import { DepartmentSidebar } from './components/DepartmentSidebar';
import { SubmenuContent } from './components/SubmenuContent';
import { DEPARTMENT_ITEMS } from './constants/departmentData';
import { DROPDOWN_STYLES } from './constants/dropdownConstants';
import { useDropdownState } from './hooks/useDropdownState';

type AllCategoriesDropdownProps = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export function AllCategoriesDropdown({
  isOpen,
  onClose,
}: AllCategoriesDropdownProps) {
  const {
    dropdownRef,
    hoveredDepartment,
    handleDepartmentHover,
    handleDepartmentLeave,
    handleMainContentMouseEnter,
  } = useDropdownState({ isOpen, onClose });

  if (!isOpen) {
    return null;
  }

  const hoveredDepartmentData = hoveredDepartment
    ? DEPARTMENT_ITEMS.find(item => item.id === hoveredDepartment)
    : null;

  return (
    <div
      ref={dropdownRef}
      className={`absolute left-0 top-full z-50 mt-0 w-full ${DROPDOWN_STYLES.colors.background} ${DROPDOWN_STYLES.colors.text} shadow-2xl`}
      style={{
        maxWidth: '1440px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      role="dialog"
      tabIndex={-1}
    >
      <div className="flex border-b border-gray-200">
        <DepartmentSidebar
          departments={DEPARTMENT_ITEMS}
          hoveredDepartment={hoveredDepartment}
          onDepartmentHover={handleDepartmentHover}
          onDepartmentLeave={handleDepartmentLeave}
        />

        <div
          className={`${DROPDOWN_STYLES.mainContent.container} transition-opacity duration-200 ease-out`}
          onMouseEnter={() => handleMainContentMouseEnter()}
          onMouseLeave={() => handleDepartmentLeave()}
        >
          {hoveredDepartmentData
            ? (
                <SubmenuContent department={hoveredDepartmentData} />
              )
            : (
                <DefaultContent />
              )}
        </div>
      </div>
    </div>
  );
}
