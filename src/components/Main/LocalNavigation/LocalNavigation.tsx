'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// components
import { FlexContainer, Typography } from 'nimble-ds';

// emotion
import { navigationStyle } from './LocalNavigation.style';

// constants
import { NAV_ITEMS } from './constants';

const LocalNavigation = () => {
    const pathname = usePathname();

    return (
        <nav css={navigationStyle}>
            <FlexContainer gap="1.25rem">
                {NAV_ITEMS.map((item, i) => (
                    <Link href={item.url} style={{ textDecoration: 'none' }}>
                        <Typography
                            key={i}
                            value={item.title}
                            size="28px"
                            color={
                                pathname === item.url ? 'gray900' : 'gray400'
                            }
                            weight="lg"
                        />
                    </Link>
                ))}
            </FlexContainer>
        </nav>
    );
};

export default LocalNavigation;
