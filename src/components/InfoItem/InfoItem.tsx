import classes from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string,
}

export const InfoItem = ({icon, text}: InfoItemProps) => {
  const currentText = text || 'Not Available';
  
  return (
    <div className={`${classes.infoItem}${text ? '' : ` ${classes.empty}`}`}>
      {icon}
      <span>{currentText}</span>
    </div>
  );
};
