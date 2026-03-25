import dynamic from "next/dynamic";
import MainBanner from "./MainBanner";
import MobileMainBanner from "./MobileMainBanner";
import ContactMain from "../Section6/ContactMain";

export const MainBannerDeferred = MainBanner;
export const MobileMainBannerDeferred = MobileMainBanner;
export const StepSectionDeferred = dynamic(() => import("./StepSection"));
export const VerticalSlider2Deferred = dynamic(() =>
  import("./VerticalSlider2")
);
export const QuestionsSection2Deferred = dynamic(() =>
  import("./QuestionSection2")
);
export const QuestionsSectionDeferred = dynamic(() =>
  import("./QuestionsSection")
);
export const AutoBreadcrumbsWhiteDeferred = dynamic(() =>
  import("../common/AutoBreadcrumbsWhite")
);
export const ContactMainDeferred = ContactMain;
