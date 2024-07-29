import { LazyComponent } from "@web/nicollet";

export default () =>       <LazyComponent
// @ts-ignore
  loader={() => <div/>}
/>