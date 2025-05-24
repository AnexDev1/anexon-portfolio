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
}) => {
  const imageStyle: React.CSSProperties = {};
  if (imageWidth) {
    imageStyle.width = imageWidth;
  }
  if (imageHeight) {
    imageStyle.height = imageHeight;
  }

  const baseClassName = "app-icon-container";
  const containerClasses = [baseClassName];

  // If noBackground is true, or if showImageOnly is true, the main container becomes transparent.
  if (noBackground || showImageOnly) {
    containerClasses.push(`${baseClassName}--no-background`);
  }
  // Add a general class if showImageOnly is active for any other specific CSS adjustments
  if (showImageOnly) {
    containerClasses.push(`${baseClassName}--show-image-only`);
  }

  const imageWrapperClasses = [`${baseClassName}__image-wrapper`];
  // Apply card effect to the image wrapper if the main container is transparent
  // (due to noBackground) or if only the image is meant to be shown (showImageOnly).
  if (noBackground || showImageOnly) {
    imageWrapperClasses.push(`${baseClassName}__image-wrapper--card-effect`);
  }

  return (
    <div className={containerClasses.join(' ')}>
      <div className={imageWrapperClasses.join(' ')}>
        <img
          src={imageUrl}
          alt={imageAlt || label}
          className={`${baseClassName}__image`}
          style={imageStyle}
        />
        {/* Notification is shown ONLY if showImageOnly is false AND notificationText exists */}
        {!showImageOnly && notificationText && (
          <div className={`${baseClassName}__notification-indicator`}>
            {notificationText}
          </div>
        )}
      </div>
      {/* Label is shown ONLY if showImageOnly is false. It's a sibling to the image-wrapper. */}
      {!showImageOnly && <p className={`${baseClassName}__label`}>{label}</p>}
    </div>
  );
};

export default AppIconContainer;