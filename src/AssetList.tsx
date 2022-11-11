import React from 'react';
import { FlatList } from 'react-native';
import { MemoizedAssetItem } from './MemoizedAssetItem';
import { AssetListPropTypes, CameraRollAsset } from './Types';

export const AssetList = ({
    margin,
    data,
    selectedItems,
    onClick,
    getMoreAssets,
    cols,
    screen,
    selectedIcon,
    videoIcon,
    disabledAsset,
}: AssetListPropTypes) => {
    const _renderItem = ({ item }: { item: CameraRollAsset }) => {
        return (
            <MemoizedAssetItem
                id={item.id}
                image={item.uri}
                mediaType={item.mediaType}
                selectedIndex={selectedItems.indexOf(item.id)}
                onClick={onClick}
                cols={cols}
                screen={screen}
                margin={margin}
                disabledAsset={disabledAsset}
                selectedIcon={selectedIcon}
                enabled={item.enabled || false}
                videoIcon={videoIcon}
            />
        );
    };

    const _getItemLayout = (index: number) => {
        let length = screen / cols;
        return { length, offset: length * index, index };
    };

    return (
        <FlatList
            data={data}
            numColumns={cols}
            initialNumToRender={50}
            getItemLayout={(assets, index) => _getItemLayout(index)}
            renderItem={_renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedItems}
            onEndReached={() => getMoreAssets()}
            onEndReachedThreshold={0.5}
        />
    );
};
