import { useState } from "react";
import {
  SidebarLink,
  SidebarLabel,
  SubnavImg,
  SubnavLink,
  SubnavText,
  SubnavList,
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
        <div>
          {dataApi && subnav ? <DownIcon /> : dataApi ? <UpIcon /> : null}
        </div>
      </SidebarLink>

      <hr />
      <SubnavList>
        {subnav &&
          item.children.map((item, index) => {
            return (
              <SubnavLink key={index}>
                <SubnavImg src={item.icon} />
                <SubnavText>{item.text}</SubnavText>
              </SubnavLink>
            );
          })}
      </SubnavList>
    </>
  );
};
