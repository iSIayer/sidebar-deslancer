import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SidebarLink,
  SidebarLabel,
  SubnavImg,
  SubnavLink,
  SubnavText,
  SlIconContainer,
  DownIcon,
  UpIcon,
} from "./SubMenu.styled";

export const SubMenu = ({ item, dataApi }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={dataApi && showSubnav}>
        <div>
          <SidebarLabel>{item.text}</SidebarLabel>
        </div>

        {dataApi && subnav ? (
          <SlIconContainer>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: subnav ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ height: "18px" }}
            >
              <DownIcon />
            </motion.div>
          </SlIconContainer>
        ) : dataApi ? (
          <SlIconContainer>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: subnav ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ height: "18px" }}
            >
              <UpIcon />
            </motion.div>
          </SlIconContainer>
        ) : null}
      </SidebarLink>

      <hr />

      <AnimatePresence>
        {subnav && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {item.children.map((item, index) => (
              <motion.li key={index}>
                <SubnavLink>
                  <SubnavImg
                    src={
                      item.icon
                        ? item.icon
                        : "https://placehold.co/100x100?text=No+Image"
                    }
                  />
                  <SubnavText>{item.text}</SubnavText>
                </SubnavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
