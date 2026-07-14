export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-8 sm:px-8 lg:px-8 ${className}`}>{children}</div>;
}
