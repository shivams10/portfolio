import { ServiceInterface } from 'components/types';
import { FunctionComponent } from 'react';

export const ServiceCard: FunctionComponent<{
  service: ServiceInterface;
}> = ({ service: { icon: Icon, about, title } }) => {
  const createMarkUp = () => {
    return { __html: about };
  };

  return (
    <div className="flex items-center p-3 space-x-4">
      <Icon className="w-12 h-12 text-indigo" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkUp()} />
      </div>
    </div>
  );
};
