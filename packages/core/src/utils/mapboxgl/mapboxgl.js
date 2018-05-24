import ExecutionEnvironment from 'exenv';

const mapbox = ExecutionEnvironment.canUseDOM ? require('@appearhere/mapbox-gl/dist/mapbox-gl') : {};

mapbox.accessToken = 'pk.eyJ1IjoiYXBwZWFyaGVyZSIsImEiOiJvUlJ0MWxNIn0.8_mzlmxdekKy99luyV4T7w';

export default mapbox;
