type VideoEmbedProps = {
  src: string;
  title?: string;
  caption?: string;
};

export function VideoEmbed({ src, title, caption }: VideoEmbedProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
        <video
          src={src}
          controls
          className="w-full"
          title={title}
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
