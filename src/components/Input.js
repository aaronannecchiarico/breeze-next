const Input = ({ disabled = false, className, type='text', ...props }) => (
    type === 'textarea' ? (
        <textarea
            disabled={disabled}
            className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
            {...props}
        />
    ) :
    <input
        disabled={disabled}
        type={type}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
