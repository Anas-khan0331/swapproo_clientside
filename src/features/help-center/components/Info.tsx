export default function Info({ title, description }) {
  return (
    <div className="mb-8">
      {/* <h2 className="text-foreground mb-3 text-xl font-semibold leading-7">{title}</h2> */}
      <div className="text-muted-foreground text-base leading-relaxed [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {/* {description} */}
      </div>
    </div>
  );
}
