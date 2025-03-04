interface BrandTiktokProps {
  size?: number
  className?: string
}

export default function BrandTiktok({ size = 24, className = "" }: BrandTiktokProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5314 17.8999 9.86 17.9C8.44 17.9 7.26 16.74 7.26 15.3C7.26 13.58 8.92 12.29 10.63 12.82V9.66C7.18 9.2 4.16 11.88 4.16 15.3C4.16 18.63 6.92 21 9.85 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z"
        fill="currentColor"
      />
    </svg>
  )
}

