import React from 'react'
import { ReactComponent as Checklist} from '../../../assets/icons/checklist.svg'

const List = ({name_list}) => {
  return (
    <div className="flex items-center gap-2 font-bold py-2">
      <Checklist className="text-blue-400 w-7" />
      <p>{name_list}</p>
    </div>
  );
};

export default List;
