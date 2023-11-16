---
import Foot from "../../components/Foot.astro";
import Head from "../../components/Head.astro";
import Menu from "../../components/Menu/index.astro";
import { type IIncludePlugins } from "../../types";
import "../../assets/styles/typography.scss";
import "./index.scss";

export type Props = {
  title: string;
  includePlugins?: IIncludePlugins;
  includeMenu?: boolean;
};

const { title, includeMenu = false, includePlugins } = Astro.props;
---

<!doctype html>
<html lang="en">
  <Head title={title} includePlugins={includePlugins} />

  <body>
    <div id="background"></div>

    {includeMenu && <Menu />}
    <slot />

    <Foot includePlugins={includePlugins} />
  </body>
</html>
