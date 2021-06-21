import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Icon } from '@contentful/forma-36-react-components';

const buttonIcons =[
  'Heading',
     'ArrowDown',
     'ArrowDownTrimmed',
     'ArrowUp',
     'ArrowUpTrimmed',
     'Asset',
     'AssetTrimmed',
     'Calendar',
     'ChatBubble',
     'ChatBubbleTrimmed',
     'CheckCircle',
     'CheckCircleTrimmed',
     'ChevronDown',
     'ChevronDownTrimmed',
     'ChevronLeft',
     'ChevronLeftTrimmed',
     'ChevronRight',
     'ChevronRightTrimmed',
     'ChevronUp',
     'ChevronUpTrimmed',
     'Clock',
     'ClockTrimmed',
     'Close',
     'CloseTrimmed',
     'CloudUpload',
     'Code',
     'CodeTrimmed',
     'Copy',
     'CopyTrimmed',
     'Cycle',
     'CycleTrimmed',
     'Delete',
     'DeleteTrimmed',
     'Done',
     'DoubleArrow',
     'Download',
     'DownloadTrimmed',
     'Drag',
     'DragTrimmed',
     'Edit',
     'EditTrimmed',
     'EmbeddedEntryBlock',
     'EmbeddedEntryBlockTrimmed',
     'EmbeddedEntryInline',
     'EmbeddedEntryInlineTrimmed',
     'Entry',
     'EntryTrimmed',
     'Environment',
     'EnvironmentAlias',
     'ErrorCircle',
     'ErrorCircleOutline',
     'ErrorCircleTrimmed',
     'ExternalLink',
     'ExternalLinkTrimmed',
     'FaceHappy',
     'FaceHappyTrimmed',
     'Filter',
     'FilterTrimmed',
     'Folder',
     'FolderCreate',
     'FolderCreateTrimmed',
     'FolderOpen',
     'FolderOpenTrimmed',
     'FolderTrimmed',
     'FormatBold',
     'FormatBoldTrimmed',
     'FormatItalic',
     'FormatItalicTrimmed',
     'FormatUnderlined',
     'FormatUnderlinedTrimmed',
     'Gift',
     'HeadingOne',
     'HeadingOneTrimmed',
     'HeadingTrimmed',
     'HeadingTwo',
     'HeadingTwoTrimmed',
     'HelpCircle',
     'HelpCircleInverted',
     'HelpCircleTrimmed',
     'HorizontalRule',
     'HorizontalRuleTrimmed',
     'InfoCircle',
     'InfoCircleTrimmed',
     'Language',
     'Link',
     'LinkAlternate',
     'LinkTrimmed',
     'ListBulleted',
     'ListBulletedTrimmed',
     'ListNumbered',
     'ListNumberedTrimmed',
     'Lock',
     'LockTrimmed',
     'Logout',
     'LooksOne',
     'LooksOneTrimmed',
     'LooksTwo',
     'LooksTwoTrimmed',
     'Menu',
     'MenuTrimmed',
     'Minus',
     'MoreHorizontal',
     'MoreHorizontalTrimmed',
     'MoreVertical',
     'MoreVerticalTrimmed',
     'Person',
     'Plus',
     'PlusCircle',
     'PlusCircleTrimmed',
     'PlusTrimmed',
     'Preview',
     'Quote',
     'QuoteTrimmed',
     'Receipt',
     'ReceiptTrimmed',
     'References',
     'Release',
     'ReleaseTrimmed',
     'Search',
     'SearchTrimmed',
     'Settings',
     'SettingsTrimmed',
     'ShoppingCart',
     'ShoppingCartTrimmed',
     'Star',
     'StarTrimmed',
     'Subscript',
     'SubscriptTrimmed',
     'Superscript',
     'SuperscriptTrimmed',
     'Tags',
     'Text',
     'TextTrimmed',
     'ThumbDown',
     'ThumbDownTrimmed',
     'ThumbUp',
     'ThumbUpTrimmed',
     'Users',
     'UsersTrimmed',
     'Warning',
     'WarningTrimmed',
     'Workflows'
]

const FormaIcons = (props) => (
  <Icon {...props} />
);

FormaIcons.propTypes = {
  /**
  * The icon to display.
  * 
  * */
  icon: PropTypes.oneOf(buttonIcons),
  /**
  * The size of the icon.
  * */
  size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  /**
  * The color of the icon
  * */
  color: PropTypes.oneOf(["primary", "secondary", "positive", "negative", "warning", "muted", "white"]),
};

FormaIcons.defaultProps = {
icon: "Star",
size: "small",
color: "primary"
};

export { FormaIcons as default };