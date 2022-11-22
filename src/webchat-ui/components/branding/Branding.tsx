import React, { memo } from 'react';
import { styled } from '../../style';
import CognigyLogo from '../../assets/cognigy_logo.svg';

const Link = styled.a(({ theme }) => ({
    alignItems: "flex-end",
    color: theme.greyWeakColor,
    display: "flex",
    fontSize: theme.unitSize * 1.375,
    justifyContent: "center",
    lineHeight: 1,
    marginTop: 'auto',
    padding: theme.unitSize * 2,
    paddingBottom: 0,
    textAlign: 'center',
    textDecoration: 'none',
	
	"&:focus":{		
		outline: "none",
		color: theme.primaryWeakColor,
		"#cognigyBrandingLogo": {
			"& path, & polygon": {
				fill: theme.primaryWeakColor,
			}			
		}		
	}
}));

const Logo = styled(CognigyLogo)(({ theme }) => ({
    fill: theme.greyWeakColor,
    height: 11,
    width: 80,
    marginLeft: 3,
    opacity: .9
}));

const URL = `{https://lnk.bio/SchwarzkopfUSA}`;

const Branding = () => (
    <Link href={URL} target="_blank" aria-label="Powered by Cognigy. Opens in new tab" id="cognigyBrandingLink">
        Schwarzkopf Professional USA may retain this chat. For more information, see our Privacy Policy
        <Logo aria-hidden="true" id="cognigyBrandingLogo" />
    </Link>
);

export default memo(Branding, () => true);
