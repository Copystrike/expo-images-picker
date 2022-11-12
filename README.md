# expo-images-picker

Forked repo to suit my needs.
I didn't make a PR because the changes that I made are too big and I tried to cleanup the code as much as I could but its still messy, I bet in an week this code will look like double dutch to me.


Things I have added: 

Extended the interface for Asset called CameraRollAsset
```typescript
enabled: boolean; // when false the image will have the overlay of StylesType#disabledAssetIcon
```

SelectedIcon & disabledAssetType do now have an opacity property
StylesType#disabledAssetIcon has iconType as Type
```typescript
export type iconType = {
    Component: JSXElementConstructor<any> | null;
    iconName: string;
    color: string;
    size: number;
};
export interface SelectedIconType extends iconType {
    bg: string;
    opacity: number;
}
```

SettingsType:
```typescript
// Will be executed right before it will display the asset.
// Usefull when you want to disabled a specific asset or just delete it from the list and it wont even show up!
displayAssets?: (assets: CameraRollAsset[]) => CameraRollAsset[];
onClick?: (itemType: ItemType) => void; // Will execute when an asset is clicked (Even if disabled)
preOnClick?: (itemType: ItemType) => void; // Will execute when an asset is clicked (Even if disabled)
```

