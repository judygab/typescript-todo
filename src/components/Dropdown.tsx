import React from "react";


interface DropdownItemProps {
    icon?: string
    options: Array<Option>
}

export const Dropdown: React.FC<DropdownItemProps> = ({ icon, options }) => {
  return (
    <div className="dropdown">
      <div>dropdown</div>
      <div className="dropdown-list-container">
        {options.map((option) => {
          return (
            <button className="dropdown-list-btn">{option.value}</button>
          )
        })}
      </div>
    </div>
  )
}
