import React, { FunctionComponent } from 'react';
import { SkillInterface } from 'components/types';

export const Bar: FunctionComponent<{ data: SkillInterface }> = ({
  data: { Icon, name, level }
}) => {
  return (
    <div className="my-2 text-white bg-gray-200 rounded-full dark:bg-dark-700">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};
