import { lazy as ReactLazy } from "react";

const lazy = <T>(icon: T) =>
  ReactLazy(() =>
    import("@heroicons/react/24/outline").then((mod) => ({
      // @ts-ignore
      default: mod[icon],
    })),
  );

export const ICONS = {
  "academic-cap": lazy("AcademicCapIcon"),
  "adjustments-horizontal": lazy("AdjustmentsHorizontalIcon"),
  "adjustments-vertical": lazy("AdjustmentsVerticalIcon"),
  "archive-box": lazy("ArchiveBoxIcon"),
  "archive-box-arrow-down": lazy("ArchiveBoxArrowDownIcon"),
  "archive-box-xMark": lazy("ArchiveBoxXMarkIcon"),
  "arrow-down": lazy("ArrowDownIcon"),
  "arrow-down-circle": lazy("ArrowDownCircleIcon"),
  "arrow-down-left": lazy("ArrowDownLeftIcon"),
  "arrow-down-onSquare": lazy("ArrowDownOnSquareIcon"),
  "arrow-down-onSquare-stack": lazy("ArrowDownOnSquareStackIcon"),
  "arrow-down-right": lazy("ArrowDownRightIcon"),
  "arrow-down-tray": lazy("ArrowDownTrayIcon"),
  "arrow-left": lazy("ArrowLeftIcon"),
  "arrow-left-circle": lazy("ArrowLeftCircleIcon"),
  "arrow-long-down": lazy("ArrowLongDownIcon"),
  "arrow-long-Left": lazy("ArrowLongLeftIcon"),
  "arrow-long-right": lazy("ArrowLongRightIcon"),
  "arrow-long-up": lazy("ArrowLongUpIcon"),
  "arrow-path": lazy("ArrowPathIcon"),
  "arrow-path-rounded-square": lazy("ArrowPathRoundedSquareIcon"),
  "arrow-right": lazy("ArrowRightIcon"),
  "arrow-right-circle": lazy("ArrowRightCircleIcon"),
  "arrow-top-right-onSquare": lazy("ArrowTopRightOnSquareIcon"),
  "arrow-trending-down": lazy("ArrowTrendingDownIcon"),
  "arrow-trending-up": lazy("ArrowTrendingUpIcon"),
  "arrow-up": lazy("ArrowUpIcon"),
  "arrow-up-circle": lazy("ArrowUpCircleIcon"),
  "arrow-up-left": lazy("ArrowUpLeftIcon"),
  "arrow-up-onSquare": lazy("ArrowUpOnSquareIcon"),
  "arrow-up-onSquare-stack": lazy("ArrowUpOnSquareStackIcon"),
  "arrow-up-right": lazy("ArrowUpRightIcon"),
  "arrow-up-tray": lazy("ArrowUpTrayIcon"),
  "arrow-uturn-down": lazy("ArrowUturnDownIcon"),
  "arrow-uturn-left": lazy("ArrowUturnLeftIcon"),
  "arrow-uturn-right": lazy("ArrowUturnRightIcon"),
  "arrow-uturn-up": lazy("ArrowUturnUpIcon"),
  "arrows-pointing-in": lazy("ArrowsPointingInIcon"),
  "arrows-pointing-out": lazy("ArrowsPointingOutIcon"),
  "arrows-right-left": lazy("ArrowsRightLeftIcon"),
  "arrows-up-down": lazy("ArrowsUpDownIcon"),
  "at-symbol": lazy("AtSymbolIcon"),
  backspace: lazy("BackspaceIcon"),
  backward: lazy("BackwardIcon"),
  banknotes: lazy("BanknotesIcon"),
  bars2: lazy("Bars2Icon"),
  bars3: lazy("Bars3Icon"),
  "bars3-bottom-left": lazy("Bars3BottomLeftIcon"),
  "bars3-bottom-right": lazy("Bars3BottomRightIcon"),
  "bars3-center-left": lazy("Bars3CenterLeftIcon"),
  bars4: lazy("Bars4Icon"),
  "bars-arrow-down": lazy("BarsArrowDownIcon"),
  "bars-arrow-up": lazy("BarsArrowUpIcon"),
  battery0: lazy("Battery0Icon"),
  battery100: lazy("Battery100Icon"),
  battery50: lazy("Battery50Icon"),
  beaker: lazy("BeakerIcon"),
  bell: lazy("BellIcon"),
  "bell-alert": lazy("BellAlertIcon"),
  "bell-slash": lazy("BellSlashIcon"),
  "bell-snooze": lazy("BellSnoozeIcon"),
  bolt: lazy("BoltIcon"),
  "bolt-slash": lazy("BoltSlashIcon"),
  "book-open": lazy("BookOpenIcon"),
  bookmark: lazy("BookmarkIcon"),
  "bookmark-slash": lazy("BookmarkSlashIcon"),
  "bookmark-square": lazy("BookmarkSquareIcon"),
  briefcase: lazy("BriefcaseIcon"),
  "bug-ant": lazy("BugAntIcon"),
  "building-library": lazy("BuildingLibraryIcon"),
  "building-office": lazy("BuildingOfficeIcon"),
  "building-office2": lazy("BuildingOffice2Icon"),
  "building-storefront": lazy("BuildingStorefrontIcon"),
  cake: lazy("CakeIcon"),
  calculator: lazy("CalculatorIcon"),
  calendar: lazy("CalendarIcon"),
  "calendar-days": lazy("CalendarDaysIcon"),
  camera: lazy("CameraIcon"),
  "chart-bar": lazy("ChartBarIcon"),
  "chart-bar-square": lazy("ChartBarSquareIcon"),
  "chart-pie": lazy("ChartPieIcon"),
  "chat-bubble-bottom-center": lazy("ChatBubbleBottomCenterIcon"),
  "chat-bubble-bottom-center-text": lazy("ChatBubbleBottomCenterTextIcon"),
  "chat-bubble-left": lazy("ChatBubbleLeftIcon"),
  "chat-bubble-left-ellipsis": lazy("ChatBubbleLeftEllipsisIcon"),
  "chat-bubble-left-right": lazy("ChatBubbleLeftRightIcon"),
  "chat-bubble-oval-left": lazy("ChatBubbleOvalLeftIcon"),
  "chat-bubble-oval-left-ellipsis": lazy("ChatBubbleOvalLeftEllipsisIcon"),
  check: lazy("CheckIcon"),
  "check-badge": lazy("CheckBadgeIcon"),
  "check-circle": lazy("CheckCircleIcon"),
  "chevron-double-down": lazy("ChevronDoubleDownIcon"),
  "chevron-double-left": lazy("ChevronDoubleLeftIcon"),
  "chevron-double-right": lazy("ChevronDoubleRightIcon"),
  "chevron-double-up": lazy("ChevronDoubleUpIcon"),
  "chevron-down": lazy("ChevronDownIcon"),
  "chevron-left": lazy("ChevronLeftIcon"),
  "chevron-right": lazy("ChevronRightIcon"),
  "chevron-up": lazy("ChevronUpIcon"),
  "chevron-up-down": lazy("ChevronUpDownIcon"),
  "circle-stack": lazy("CircleStackIcon"),
  clipboard: lazy("ClipboardIcon"),
  "clipboard-document": lazy("ClipboardDocumentIcon"),
  "clipboard-document-check": lazy("ClipboardDocumentCheckIcon"),
  "clipboard-document-list": lazy("ClipboardDocumentListIcon"),
  clock: lazy("ClockIcon"),
  cloud: lazy("CloudIcon"),
  "cloud-arrow-down": lazy("CloudArrowDownIcon"),
  "cloud-arrow-up": lazy("CloudArrowUpIcon"),
  "code-bracket": lazy("CodeBracketIcon"),
  "code-bracket-square": lazy("CodeBracketSquareIcon"),
  cog: lazy("CogIcon"),
  "cog6-tooth": lazy("Cog6ToothIcon"),
  "cog8-tooth": lazy("Cog8ToothIcon"),
  "command-line": lazy("CommandLineIcon"),
  "computer-desktop": lazy("ComputerDesktopIcon"),
  "cpu-chip": lazy("CpuChipIcon"),
  "credit-card": lazy("CreditCardIcon"),
  cube: lazy("CubeIcon"),
  "cube-transparent": lazy("CubeTransparentIcon"),
  "currency-bangladeshi": lazy("CurrencyBangladeshiIcon"),
  "currency-dollar": lazy("CurrencyDollarIcon"),
  "currency-euro": lazy("CurrencyEuroIcon"),
  "currency-pound": lazy("CurrencyPoundIcon"),
  "currency-rupee": lazy("CurrencyRupeeIcon"),
  "currency-yen": lazy("CurrencyYenIcon"),
  "cursor-arrow-rays": lazy("CursorArrowRaysIcon"),
  "cursor-arrow-ripple": lazy("CursorArrowRippleIcon"),
  "device-phone-mobile": lazy("DevicePhoneMobileIcon"),
  "device-tablet": lazy("DeviceTabletIcon"),
  document: lazy("DocumentIcon"),
  "document-arrow-down": lazy("DocumentArrowDownIcon"),
  "document-arrow-up": lazy("DocumentArrowUpIcon"),
  "document-chart-bar": lazy("DocumentChartBarIcon"),
  "document-check": lazy("DocumentCheckIcon"),
  "document-duplicate": lazy("DocumentDuplicateIcon"),
  "document-magnifying-glass": lazy("DocumentMagnifyingGlassIcon"),
  "document-minus": lazy("DocumentMinusIcon"),
  "document-plus": lazy("DocumentPlusIcon"),
  "document-text": lazy("DocumentTextIcon"),
  "ellipsis-horizontal": lazy("EllipsisHorizontalIcon"),
  "ellipsis-horizontal-circle": lazy("EllipsisHorizontalCircleIcon"),
  "ellipsis-vertical": lazy("EllipsisVerticalIcon"),
  envelope: lazy("EnvelopeIcon"),
  "envelope-open": lazy("EnvelopeOpenIcon"),
  "exclamation-circle": lazy("ExclamationCircleIcon"),
  "exclamation-triangle": lazy("ExclamationTriangleIcon"),
  eye: lazy("EyeIcon"),
  "eye-dropper": lazy("EyeDropperIcon"),
  "eye-slash": lazy("EyeSlashIcon"),
  "face-frown": lazy("FaceFrownIcon"),
  "face-smile": lazy("FaceSmileIcon"),
  film: lazy("FilmIcon"),
  "finger-print": lazy("FingerPrintIcon"),
  fire: lazy("FireIcon"),
  flag: lazy("FlagIcon"),
  folder: lazy("FolderIcon"),
  "folder-arrow-down": lazy("FolderArrowDownIcon"),
  "folder-minus": lazy("FolderMinusIcon"),
  "folder-open": lazy("FolderOpenIcon"),
  "folder-plus": lazy("FolderPlusIcon"),
  forward: lazy("ForwardIcon"),
  funnel: lazy("FunnelIcon"),
  gif: lazy("GifIcon"),
  gift: lazy("GiftIcon"),
  "gift-top": lazy("GiftTopIcon"),
  "globe-alt": lazy("GlobeAltIcon"),
  "globe-americas": lazy("GlobeAmericasIcon"),
  "globe-asia-australia": lazy("GlobeAsiaAustraliaIcon"),
  "globe-europe-africa": lazy("GlobeEuropeAfricaIcon"),
  "hand-raised": lazy("HandRaisedIcon"),
  "hand-thumb-down": lazy("HandThumbDownIcon"),
  "hand-thumb-up": lazy("HandThumbUpIcon"),
  hashtag: lazy("HashtagIcon"),

  heart: lazy("HeartIcon"),
  home: lazy("HomeIcon"),
  "home-modern": lazy("HomeModernIcon"),
  identification: lazy("IdentificationIcon"),
  inbox: lazy("InboxIcon"),
  "inbox-arrow-down": lazy("InboxArrowDownIcon"),
  "inbox-stack": lazy("InboxStackIcon"),
  "information-circle": lazy("InformationCircleIcon"),
  key: lazy("KeyIcon"),
  language: lazy("LanguageIcon"),
  lifebuoy: lazy("LifebuoyIcon"),
  "light-bulb": lazy("LightBulbIcon"),
  link: lazy("LinkIcon"),
  "list-bullet": lazy("ListBulletIcon"),
  "lock-closed": lazy("LockClosedIcon"),
  "lock-open": lazy("LockOpenIcon"),
  "magnifying-glass": lazy("MagnifyingGlassIcon"),
  "magnifying-glass-circle": lazy("MagnifyingGlassCircleIcon"),
  "magnifying-glass-minus": lazy("MagnifyingGlassMinusIcon"),
  "magnifying-glass-plus": lazy("MagnifyingGlassPlusIcon"),
  map: lazy("MapIcon"),
  "map-pin": lazy("MapPinIcon"),
  megaphone: lazy("MegaphoneIcon"),
  microphone: lazy("MicrophoneIcon"),
  minus: lazy("MinusIcon"),
  "minus-circle": lazy("MinusCircleIcon"),
  moon: lazy("MoonIcon"),
  "musical-note": lazy("MusicalNoteIcon"),
  newspaper: lazy("NewspaperIcon"),
  "no-symbol": lazy("NoSymbolIcon"),
  "paint-brush": lazy("PaintBrushIcon"),
  "paper-airplane": lazy("PaperAirplaneIcon"),
  "paper-clip": lazy("PaperClipIcon"),
  pause: lazy("PauseIcon"),
  "pause-circle": lazy("PauseCircleIcon"),
  pencil: lazy("PencilIcon"),
  "pencil-square": lazy("PencilSquareIcon"),
  phone: lazy("PhoneIcon"),
  "phone-arrow-down-left": lazy("PhoneArrowDownLeftIcon"),
  "phone-arrow-up-right": lazy("PhoneArrowUpRightIcon"),
  "phone-x-mark": lazy("PhoneXMarkIcon"),
  photo: lazy("PhotoIcon"),
  play: lazy("PlayIcon"),
  "play-circle": lazy("PlayCircleIcon"),
  "play-pause": lazy("PlayPauseIcon"),
  plus: lazy("PlusIcon"),
  "plus-circle": lazy("PlusCircleIcon"),
  power: lazy("PowerIcon"),
  "presentation-chart-bar": lazy("PresentationChartBarIcon"),
  "presentation-chart-line": lazy("PresentationChartLineIcon"),
  printer: lazy("PrinterIcon"),
  "puzzle-piece": lazy("PuzzlePieceIcon"),
  "qr-code": lazy("QrCodeIcon"),
  "question-mark-circle": lazy("QuestionMarkCircleIcon"),
  "queue-list": lazy("QueueListIcon"),
  radio: lazy("RadioIcon"),
  "receipt-percent": lazy("ReceiptPercentIcon"),
  "receipt-refund": lazy("ReceiptRefundIcon"),
  "rectangle-group": lazy("RectangleGroupIcon"),
  "rectangle-stack": lazy("RectangleStackIcon"),
  "rocket-launch": lazy("RocketLaunchIcon"),
  rss: lazy("RssIcon"),
  scale: lazy("ScaleIcon"),
  scissors: lazy("ScissorsIcon"),
  server: lazy("ServerIcon"),
  "server-stack": lazy("ServerStackIcon"),
  share: lazy("ShareIcon"),
  "shield-check": lazy("ShieldCheckIcon"),
  "shield-exclamation": lazy("ShieldExclamationIcon"),
  "shopping-bag": lazy("ShoppingBagIcon"),
  "shopping-cart": lazy("ShoppingCartIcon"),
  signal: lazy("SignalIcon"),
  "signal-slash": lazy("SignalSlashIcon"),
  sparkles: lazy("SparklesIcon"),
  "speaker-wave": lazy("SpeakerWaveIcon"),
  "speaker-x-mark": lazy("SpeakerXMarkIcon"),
  "square2-stack": lazy("Square2StackIcon"),
  "square3-stack3d": lazy("Square3Stack3DIcon"),
  squares2x2: lazy("Squares2X2Icon"),
  "squares-plus": lazy("SquaresPlusIcon"),
  star: lazy("StarIcon"),
  stop: lazy("StopIcon"),
  "stop-circle": lazy("StopCircleIcon"),
  sun: lazy("SunIcon"),
  swatch: lazy("SwatchIcon"),
  "table-cells": lazy("TableCellsIcon"),
  tag: lazy("TagIcon"),
  ticket: lazy("TicketIcon"),
  trash: lazy("TrashIcon"),
  trophy: lazy("TrophyIcon"),
  truck: lazy("TruckIcon"),
  tv: lazy("TvIcon"),
  user: lazy("UserIcon"),
  "user-circle": lazy("UserCircleIcon"),
  "user-group": lazy("UserGroupIcon"),
  "user-minus": lazy("UserMinusIcon"),
  "user-plus": lazy("UserPlusIcon"),
  users: lazy("UsersIcon"),
  variable: lazy("VariableIcon"),
  "video-camera": lazy("VideoCameraIcon"),
  "video-camera-slash": lazy("VideoCameraSlashIcon"),
  "view-columns": lazy("ViewColumnsIcon"),
  "viewfinder-circle": lazy("ViewfinderCircleIcon"),
  wallet: lazy("WalletIcon"),
  wifi: lazy("WifiIcon"),
  window: lazy("WindowIcon"),
  wrench: lazy("WrenchIcon"),
  "wrench-screwdriver": lazy("WrenchScrewdriverIcon"),
  "x-circle": lazy("XCircleIcon"),
  "x-mark": lazy("XMarkIcon"),
} as const;
