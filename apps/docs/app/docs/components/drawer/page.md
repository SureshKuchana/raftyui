---
title: Drawer
pageTitle: Drawer - Rafty UI
description: Drawer
---

The Drawer component is a panel that slides out from the edge of the screen. It proves useful when you want users to perform a task or view specific details without navigating away from the current page.

This component is made using [Radix UIs Dialog Component](https://www.radix-ui.com/primitives/docs/components/dialog), but it has been modified to make it look like a drawer by adding animations and other styling.

## Anatomy

Import all parts and piece them together.

```jsx
import { Drawer, DrawerOverlay, DrawerContent, DrawerClose, DrawerTitle, DrawerDescription } from "@rafty/ui";

() => (
  <Drawer>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerTitle />
      <DrawerDescription />
      <DrawerClose />
    </DrawerContent>
  </Drawer>
);
```

## Usage

{% example name="drawer:usage" /%}

## Size

There are 4 `size` options available in the drawer: `sm`, `md` (default), `lg` & `full`.

{% example name="drawer:size" /%}

## Side

You can decide from which side you want to open the drawer and you can choose between `left` or `right` (default).

{% example name="drawer:side" /%}

### API

---

### Close

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |