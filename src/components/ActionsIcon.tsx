interface ActionsIconProps {
    onClick?: () => void
}

export default function ActionsIcon(props: ActionsIconProps) {
    return (
        <div onClick={props.onClick}>
            <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0.571289C8.60444 0.571289 8.21776 0.688587 7.88886 0.90835C7.55996 1.12811 7.30362 1.44047 7.15224 1.80592C7.00087 2.17137 6.96126 2.57351 7.03843 2.96147C7.1156 3.34943 7.30608 3.7058 7.58579 3.9855C7.86549 4.26521 8.22186 4.45569 8.60982 4.53286C8.99778 4.61003 9.39992 4.57042 9.76537 4.41905C10.1308 4.26767 10.4432 4.01133 10.6629 3.68243C10.8827 3.35353 11 2.96685 11 2.57129C11 2.04086 10.7893 1.53215 10.4142 1.15708C10.0391 0.782003 9.53043 0.571289 9 0.571289ZM2 0.571289C1.60444 0.571289 1.21776 0.688587 0.88886 0.90835C0.559962 1.12811 0.303617 1.44047 0.152242 1.80592C0.000866562 2.17137 -0.0387401 2.57351 0.0384303 2.96147C0.115601 3.34943 0.306082 3.7058 0.585787 3.9855C0.865492 4.26521 1.22186 4.45569 1.60982 4.53286C1.99778 4.61003 2.39992 4.57042 2.76537 4.41905C3.13082 4.26767 3.44318 4.01133 3.66294 3.68243C3.8827 3.35353 4 2.96685 4 2.57129C4 2.04086 3.78929 1.53215 3.41421 1.15708C3.03914 0.782003 2.53043 0.571289 2 0.571289ZM16 0.571289C15.6044 0.571289 15.2178 0.688587 14.8889 0.90835C14.56 1.12811 14.3036 1.44047 14.1522 1.80592C14.0009 2.17137 13.9613 2.57351 14.0384 2.96147C14.1156 3.34943 14.3061 3.7058 14.5858 3.9855C14.8655 4.26521 15.2219 4.45569 15.6098 4.53286C15.9978 4.61003 16.3999 4.57042 16.7654 4.41905C17.1308 4.26767 17.4432 4.01133 17.6629 3.68243C17.8827 3.35353 18 2.96685 18 2.57129C18 2.04086 17.7893 1.53215 17.4142 1.15708C17.0391 0.782003 16.5304 0.571289 16 0.571289Z" fill="#0291FB" />
            </svg>
        </div>
    )
}
