import './Button.css'

export default function Button({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={`${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}