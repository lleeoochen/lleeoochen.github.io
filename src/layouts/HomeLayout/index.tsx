---
import BaseLayout, {
  type Props as BaseLayoutProps,
} from "../BaseLayout/index.astro";
import "./index.scss";

type Props = Omit<BaseLayoutProps, "includeMenu">;

const props = Astro.props;
---

<BaseLayout includeMenu {...props}>
  <slot />
</BaseLayout>
