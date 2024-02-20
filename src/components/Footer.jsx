import SiteMap from "./SiteMap";
import SubscriptionForm from "./SubscriptionForm";

export default function Footer({visitor}) {
  return (
    <div className="flex justify-between items-top px-8 max-w-5xl">
      <div id="member"><SubscriptionForm visitor={visitor}/></div>
      <SiteMap/>
    </div>
  );
} 