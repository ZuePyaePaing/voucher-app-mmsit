import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const FaqItem = ({ id, question, answer, active, setActive }) => {

  const isActive = active === id;

  return (
    <div className=" w-full">
      <div
        className="flex flex-col w-full gap-y-1 p-1 rounded-md cursor-pointer"
        onClick={() => setActive(isActive ? null : id)}
      >
        <div className="flex justify-between bg-white p-2 rounded-md shadow-md">
          <h1 className="font-semibold">{question}</h1>
          {isActive ? (
            <ChevronUpIcon className="w-6 h-6 self-end" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 self-end" />
          )}
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-slate-300 p-3 rounded-md"
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqItem;
