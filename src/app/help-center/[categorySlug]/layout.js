import HelpBreadcrumb from "@/features/help-center/ui/HelpBreadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper pt-14">
        <div className="pb-6">
          <HelpBreadcrumb />
        </div>
      </div>
      {children}
    </>
  );
}
