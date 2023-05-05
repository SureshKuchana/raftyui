import { Accordion } from "../src";

const config = {
  title: "Components / Accordion",
  component: Accordion,
};
export default config;

export function Default() {
  return (
    <>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root
          type="single"
          defaultValue="1"
          collapsible
          variant="unstyled"
        >
          <Accordion.Item value="1">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="3">
            <Accordion.Trigger
              openIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              }
              closeIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </>
  );
}
export function Small() {
  return (
    <>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root type="single" defaultValue="1" collapsible size="sm">
          <Accordion.Item value="1">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </>
  );
}
export function Large() {
  return (
    <>
      <div className="w-[640px] rounded-md border p-4 dark:border-zinc-700">
        <Accordion.Root type="single" defaultValue="1" collapsible size="lg">
          <Accordion.Item value="1" className="border-b dark:border-white/10">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 1 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="2" className="border-b dark:border-white/10">
            <Accordion.Trigger>
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="3" className="border-b dark:border-white/10">
            <Accordion.Trigger
              openIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              }
              closeIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              <span className="flex-1 text-left">Section 2 title</span>
            </Accordion.Trigger>
            <Accordion.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </>
  );
}
