import React, { memo } from 'react';
import styled from 'styled-components/native';
import { ItemType } from './Types';

export const MemoizedAssetItem = memo((itemtype: ItemType) => {
    const { screen, cols, selectedIndex, image, mediaType, onClick, margin, selectedIcon, disabledAsset, videoIcon, enabled }: ItemType = itemtype;
    return (
        <ItemContainer margin={margin} screen={screen} cols={cols} onPress={() => onClick(itemtype)}>
            {mediaType === 'video' && (
                <MediaTypeVideo margin={margin}>
                    {videoIcon.Component && videoIcon.iconName && (
                        <videoIcon.Component name={videoIcon.iconName} size={videoIcon.size} color={videoIcon.color} />
                    )}
                </MediaTypeVideo>
            )}
            {enabled && selectedIndex >= 0 && (
                <Selected opacity={selectedIcon.opacity} selectionColor={selectedIcon.bg} margin={margin}>
                    {selectedIcon.Component && selectedIcon.iconName && (
                        <selectedIcon.Component name={selectedIcon.iconName} size={selectedIcon.size} color={selectedIcon.color} index={selectedIndex} />
                    )}
                </Selected>
            )}
            {!enabled && (
                <Selected opacity={disabledAsset.opacity} selectionColor={disabledAsset.bg} margin={margin}>
                    {disabledAsset.Component && disabledAsset.iconName && (
                        <disabledAsset.Component
                            name={disabledAsset.iconName}
                            size={disabledAsset.size}
                            color={disabledAsset.color}
                            index={selectedIndex}
                        />
                    )}
                </Selected>
            )}
            <Image source={{ uri: image }} />
        </ItemContainer>
    );
});

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const MediaTypeVideo = styled.View<{ margin: number }>`
    width: 25%;
    justify-content: center;
    align-items: center;
    height: 25%;
    position: absolute;
    z-index: 11;
    margin: ${({ margin }) => margin}px;
`;
const Selected = styled.View<{ margin: number; selectionColor: string; opacity: number }>`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: ${({ selectionColor }) => (selectionColor ? selectionColor : '#B14AC370')};
    opacity: ${({ opacity }) => opacity};
    margin: ${({ margin }) => margin}px;
`;

const ItemContainer = styled.TouchableOpacity<{
    margin: number;
    screen: number;
    cols: number;
}>`
    width: ${({ screen, cols }) => screen / cols}px;
    height: ${({ screen, cols }) => screen / cols}px;
    padding: ${({ margin }) => margin}px;
`;
