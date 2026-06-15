const CategoriesHeading = ({ title, description }) => {
  return (
    <div className="">
      <h1 className="text-foreground text-4xl leading-10 font-semibold">{title}</h1>
      {description && <p className="text-muted-foreground mt-2 text-base">{description}</p>}
    </div>
  );
};

export default CategoriesHeading;
