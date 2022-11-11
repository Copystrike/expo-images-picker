import { storiesOf } from '@storybook/react-native';
import { ReactNodeLike } from 'prop-types';
import CenterView from '../CenterView';
import React, { useMemo } from 'react';
import { MediaType, Asset } from 'expo-media-library';
import { Ionicons } from '@expo/vector-icons';
import { AssetsSelector, SettingsType, ErrorTypes, StylesType, NavigatorType } from '../../../index';
import { CameraRollAsset } from '../../../Types';

const minSelection = 1;

storiesOf('image-picker', module)
    .addDecorator((getStory) => <CenterView>{getStory() as ReactNodeLike}</CenterView>)
    .add('with text', () =>
        React.createElement(() => {
            const widgetSettings: SettingsType = useMemo(
                () => ({
                    getImageMetaData: false,
                    initialLoad: 100,
                    assetsType: [MediaType.video],
                    minSelection,
                    maxSelection: 1,
                    portraitCols: 4,
                    landscapeCols: 4,
                }),
                []
            );

            const widgetErrors: ErrorTypes = useMemo(
                () => ({
                    errorTextColor: 'red',
                    errorMessages: {
                        hasErrorWithPermissions: 'no permissions',
                        hasErrorWithLoading: 'Error with loading',
                        hasErrorWithResizing: 'Error resizing',
                        hasNoAssets: 'No assets',
                    },
                }),
                []
            );

            const widgetStyles: StylesType = useMemo(
                () => ({
                    margin: 2,
                    bgColor: 'black',
                    spinnerColor: 'white',
                    widgetWidth: 99,

                    screenStyle: {
                        borderRadius: 5,
                        overflow: 'hidden',
                    },
                    widgetStyle: {
                        margin: 10,
                    },
                    videoIcon: {
                        Component: Ionicons,
                        iconName: 'videocam',
                        color: 'black',
                        size: 20,
                    },
                    selectedIcon: {
                        Component: Ionicons,
                        iconName: 'checkmark-circle-outline',
                        color: 'white',
                        bg: 'yellow',
                        opacity: 0.6,
                        size: 26,
                    },
                    disabledAssetIcon: {
                        Component: Ionicons,
                        iconName: 'close-circle-outline',
                        color: 'white',
                        bg: 'black',
                        opacity: 0.6,
                        size: 35,
                    },
                }),
                ['black', 'yellow']
            );

            const widgetNavigator: NavigatorType = useMemo(
                () => ({
                    Texts: {
                        finish: 'finish',
                        back: 'back',
                        selected: 'selected',
                    },
                    midTextColor: 'white',
                    minSelection,
                    buttonTextStyle: { color: 'white' },
                    buttonStyle: { backgroundColor: 'orange', borderRadius: 5 },
                    onBack: () => console.log('back'),
                    onSuccess: (data: Asset[]) => console.log('success'),
                }),
                []
            );

            return <AssetsSelector Settings={widgetSettings} Errors={widgetErrors} Styles={widgetStyles} Navigator={widgetNavigator} />;
        })
    );
