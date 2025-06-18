/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArrowRight from 'public/images/arrow-right.svg';
import { cn } from '@/lib/utils';

const Card = ({
  pretitle,
  title,
  description,
  image,
  category,
  buttonText,
  link,
  textPosition = 'left',
  imageBgColor,
  disabled,
  tags, // Add tags prop
}: {
  pretitle: string;
  title: string;
  category?: string; // Made category optional
  buttonText: string;
  description: string;
  link: string;
  image: string;
  imageBgColor?: string;
  textPosition?: 'left' | 'right';
  disabled?: boolean;
  tags?: string[]; // Define tags prop type
}) => {
  // textPosition prop is not used as Figma design consistently shows text left, image right.
  const textContent = (
    // Adjusted padding and gaps to match Figma
    <div className="flex h-full flex-col justify-between p-0">
      <div className="flex flex-grow flex-col">
        {' '}
        {/* This div will grow and push the button (in the parent div) to the bottom */}
        {/* Text Content: Title, Paragraph */}
        <div className="mb-4 flex flex-col gap-2">
          {' '}
          {/* Figma: Title to Paragraph gap is 8px (gap-2) */}
          <div className="font-serif font-semibold uppercase leading-tight text-gray-500">
            {pretitle}
          </div>
          <h3 className="font-serif text-2xl font-semibold leading-tight text-gray-900">
            {' '}
            {/* Syne, 600, 24px */}
            {title}
          </h3>
          <p className="font-sans text-base font-normal leading-tight text-gray-700">
            {' '}
            {/* Inter, 400, 16px */}
            {description}
          </p>
        </div>
        {/* Tags display */}
        {tags && tags.length > 0 && (
          // Margin bottom to separate from button, mt-auto to push it down if space available
          <div className="mt-auto flex flex-wrap gap-2.5 pt-4">
            {' '}
            {/* Added pt-4 for spacing */}
            {tags.map((tag, index) => (
              <span
                key={index}
                // Figma: Inter, 400, 14px, bg #6DDBF4, text/border #063844, padding 4px 10px, border-radius 13px
                className="rounded-[13px] border border-tagAquaText px-2.5 py-1 font-sans text-sm font-normal text-tagAquaText"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Button */}
      <Button
        variant="outline"
        // Figma: White bg, black border, black arrow. Rounded 24px. Padding 10px. Size 48x48px.
        // The existing button is text based. Figma shows an icon-only button for the card.
        // For now, I'll style the existing button to be a small circle with an arrow.
        className="absolute right-8 bottom-12 group flex h-12 w-12 group-hover:w-[200px] transition-all items-center justify-center rounded-full border border-gray-900 bg-white p-2.5 group-hover:px-1 text-gray-900 hover:bg-gray-900 hover:text-white disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
        disabled={disabled}
        aria-label={buttonText || 'View case study'} // Accessibility for icon button
        // asChild prop removed as Button is no longer a Link
      >
        {/* If is hovered it should contain the text VIEW CASE STUDY */}
        <div className="group-hover:block hidden text-xs font-semibold leading-none uppercase pr-2">
          {buttonText || 'View case study'}
        </div>
        {/* Arrow icon */}
        <ArrowRight className="h-[15px] w-[15px] stroke-current" />
      </Button>
    </div>
  );

  return (
    <Link
      href={disabled ? '#' : link || '/#'} // If disabled, link to '#' to prevent navigation but keep it focusable for screen readers if needed.
      className={cn(
        // Figma: bg white, padding 24px, rounded 16px, no border
        'flex h-auto w-full flex-col items-stretch justify-between gap-8 rounded-[16px] bg-white p-6 shadow-sm lg:h-[373px] lg:flex-row hover:scale-105 transition-all duration-500 group',
        // Removed conditional flex-col-reverse as text is always left
        disabled ? 'pointer-events-none cursor-default opacity-50' : '', // Add opacity for disabled state
      )}
      aria-disabled={disabled} // Accessibility: indicate the link is disabled
      tabIndex={disabled ? -1 : undefined} // Accessibility: remove from tab order if disabled
      onClick={(e) => {
        if (disabled) {
          e.preventDefault(); // Prevent navigation if disabled
        }
      }}
    >
      {/* Text container taking roughly half width on larger screens */}
      <div className="flex w-full flex-col justify-between lg:w-[calc(100%-252px-32px)]">
        {' '}
        {/* 252px image, 32px gap */}
        {textContent}
      </div>
      {/* Image container */}
      <div
        className={cn(
          'h-[317px] w-full flex-shrink-0 overflow-hidden rounded-[16px] lg:w-[252px]', // Fixed dimensions from Figma
          imageBgColor, // Kept for potential future use, though placeholder is an image
        )}
      >
        <img
          src={image}
          className={cn(
            'h-full w-full object-cover', // Ensure image covers the container
          )}
          alt={title || 'Project image'} // Added alt text
        />
      </div>
    </Link>
  );
};

export default Card;
