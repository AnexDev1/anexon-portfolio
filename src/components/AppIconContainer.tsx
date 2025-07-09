import React from 'react';
import './AppIconContainer.css';

interface AppIconContainerProps {
  imageUrl: string;
  imageAlt?: string;
  label: string;
  notificationText?: string;
  showImageOnly?: boolean;
  imageWidth?: string | number;
  imageHeight?: string | number;
  noBackground?: boolean;
  onClick?: () => void;
}

const AppIconContainer: React.FC<AppIconContainerProps> = ({
  imageUrl,
  imageAlt,
  label,
  notificationText,
  showImageOnly = false,
  imageWidth,
  imageHeight,
  noBackground = false,
  onClick,
}) => {
  const imageStyle: React.CSSProperties = {};
  if (imageWidth) imageStyle.width = imageWidth;
  if (imageHeight) imageStyle.height = imageHeight;

  const baseClassName = "app-icon-container";
  const containerClasses = [baseClassName];
  if (noBackground || showImageOnly) containerClasses.push(`${baseClassName}--no-background`);
  if (showImageOnly) containerClasses.push(`${baseClassName}--show-image-only`);

  const imageWrapperClasses = [`${baseClassName}__image-wrapper`];
  if (noBackground || showImageOnly) imageWrapperClasses.push(`${baseClassName}__image-wrapper--card-effect`);

  return (
    <div className={containerClasses.join(' ')} onClick={onClick}>
      <div className={imageWrapperClasses.join(' ')}>
        <img
          src={imageUrl}
          alt={imageAlt || label}
          className={`${baseClassName}__image`}
          style={imageStyle}
        />
        {!showImageOnly && notificationText && (
          <div className={`${baseClassName}__notification-indicator`}>
            {notificationText}
          </div>
        )}
      </div>
      {!showImageOnly && <p className={`${baseClassName}__label`}>{label}</p>}
    </div>
  );
};

export default AppIconContainer;