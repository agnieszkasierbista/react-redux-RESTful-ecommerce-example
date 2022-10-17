import {PropsWithChildren, PureComponent} from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHr,
  StyledNote,
  StyledIcon,
  StyledUserPanel,
  StyledUserPanelDropdownContainer,
  StyledUserPanelDropdownItem,
  StyledUserPanelDropdownItemButton,
  StyledUserPanelDropdownList, StyledUserPanelDropdownSignInButton,
  StyledUserPanelDropdownSignUpButton,
  StyledUserPanelHeader,
  StyledUserPanelOverlay,
  StyledAccountButtonText,
  StyledOptionsIcon
} from './UserPanel.styled';
import {UserPanelProps} from './UserPanel.types';


export class UserPanel extends PureComponent<PropsWithChildren<UserPanelProps>> {
  render() {

    const signInButton = (<StyledUserPanelDropdownSignInButton>
            Sign in
    </StyledUserPanelDropdownSignInButton>);
    const signUpButton = (<StyledUserPanelDropdownSignUpButton>
            Sign up
    </StyledUserPanelDropdownSignUpButton>);
    const hrBar = (<StyledHr/>
    );
    const note = (<><StyledHr/>
      <StyledNote>Not signed up yet?</StyledNote></>);

    return (
      <StyledUserPanel onClick={() => this.props.dispatchToggleIsUserPanelExtended()}>
        <StyledUserPanelHeader>
          <StyledIcon src="/pictures/Person.svg" alt="person"
            isUserPanelExtended={this.props.isUserPanelExtended}
          />
        </StyledUserPanelHeader>
        <StyledUserPanelOverlay isUserPanelExtended={this.props.isUserPanelExtended}/>
        <StyledUserPanelDropdownContainer>
          {
            this.props.isUserPanelExtended
                        &&

                        <StyledUserPanelDropdownList>

                          {
                            [signInButton, note, signUpButton, hrBar].map((item, idx) => {
                              return (
                                <StyledUserPanelDropdownItem key={idx}
                                >
                                  {item}
                                </StyledUserPanelDropdownItem>
                              );
                            })
                          }

                          {
                            [{name: 'Account details', path: '/account-details', iconSrc: '/pictures/person.svg'},
                              {name: 'Orders', path: '/orders', iconSrc: '/pictures/orders.svg'},
                              {name: 'Settings', path: '/settings', iconSrc: '/pictures/settings.svg'}].map((item, idx) => {
                              return (
                                <StyledUserPanelDropdownItem key={item.name + idx}
                                ><Link to={item.path}>
                                    {
                                      <StyledUserPanelDropdownItemButton
                                        onClick={() => console.log('click')}
                                      >
                                        <StyledOptionsIcon src={item.iconSrc} alt={item.name}/>
                                        <StyledAccountButtonText>{item.name}</StyledAccountButtonText>
                                      </StyledUserPanelDropdownItemButton>
                                    }
                                  </Link>
                                </StyledUserPanelDropdownItem>
                              );
                            })
                          }
                        </StyledUserPanelDropdownList>
          }
        </StyledUserPanelDropdownContainer>
      </StyledUserPanel>
    );
  }
}

export default UserPanel;
