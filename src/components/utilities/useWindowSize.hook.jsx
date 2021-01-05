import {useLayoutEffect, useState} from "react";

const  useWindowSize = () =>  {
    const [deviceType, setDeviceType] = useState('');
    useLayoutEffect(() => {
        function updateSize() {
            // setSize([window.innerWidth, window.innerHeight]);
            if(window.innerWidth <= 900) {
                setDeviceType("phone");
            }else
            {
                setDeviceType("none");
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return deviceType;
}

export default useWindowSize;