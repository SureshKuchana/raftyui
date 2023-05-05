import * as ContextMenu from "../src/context-menu/ContextMenu";

const config = {
  title: "New/Context Menu",
  component: ContextMenu,
};
export default config;

export function Default() {
  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="border border-dashed p-5 text-center dark:border-zinc-700 dark:text-zinc-100">
            Context
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Back</ContextMenu.Item>
          <ContextMenu.Item disabled>Forward</ContextMenu.Item>
          <ContextMenu.Item>Reload</ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Save Page As...</ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
              <ContextMenu.Item>New Window...</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem>Show Bookmarks</ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem checked>
            Show Full URLs
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.Label>People</ContextMenu.Label>
          <ContextMenu.RadioGroup value="1">
            <ContextMenu.RadioItem value="1">Jack</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="2">Denial</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </>
  );
}
