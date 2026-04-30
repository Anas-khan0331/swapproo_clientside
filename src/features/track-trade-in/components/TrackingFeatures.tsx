import { TRACKING_FEATURES } from "../constants";

export function TrackingFeatures() {
  return (
    <div className="flex max-w-md flex-1 flex-col gap-4">
      {TRACKING_FEATURES.map((feature, index) => (
        <div key={index} className="flex flex-col gap-2 rounded-lg border p-3">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <feature.icon className="text-foreground size-5" />
              <p className="text-foreground text-base leading-6 font-medium">{feature.title}</p>
            </div>
            <p className="text-muted-foreground text-sm leading-5">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
