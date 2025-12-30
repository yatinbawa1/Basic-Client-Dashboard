function EmptyState({ image, alt, message, messageClass = "" }) {
  return (
    <div className="col-span-full flex items-center justify-center">
      <div>
        <img
          src={image}
          alt={alt}
          className="mx-auto mt-8 h-48 w-48 opacity-50 md:h-72 md:w-72 lg:h-96 lg:w-96"
        />

        <p
          className={`mt-4 text-center font-bold md:text-3xl lg:text-4xl ${messageClass}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
