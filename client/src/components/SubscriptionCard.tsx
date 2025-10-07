import { motion } from "framer-motion";

import SubscriptionItem from "./SubscriptionItem";

const SubscriptionCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5   text-black  pt-20">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex-1"
      >
        <SubscriptionItem
          heading="Beginner’s Guide to Business"
          subHeading="Free"
          description="Receive expert tips for getting started, a checklist for your first year of business, and helpful follow-up links."
          path="/register"
          destination="Get Started"
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex-1"
      >
        <SubscriptionItem
          heading="Monthly Membership"
          subHeading="$39/mo"
          description="Monthly access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions."
          path="/register"
          destination="Join Now"
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex-1  py-4 lg:py-0"
      >
        <SubscriptionItem
          heading="Annual Membership"
          subHeading="$429/yr — Get 1 month free"
          description="Annual access to our growing library of online classes, training courses, special events, and 1-on-1 coaching sessions."
          path="/register"
          destination="Join Now"
        />
      </motion.div>
    </div>
  );
};

export default SubscriptionCard;
