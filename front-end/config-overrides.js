/* eslint-disable eqeqeq */
const { override, useBabelRc, addBundleVisualizer } = require('customize-cra');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
);
