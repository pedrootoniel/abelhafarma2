import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const PortfolioBlockStyled = styled.div`
  .react-photo-album--photo {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 2px solid gray;
    @keyframes scale-up-center {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .categoriesList {
  display: flex;
  flex-wrap: wrap; /* Para ajustar em telas menores */
  align-items: center;
  justify-content: space-around;
  max-width: 860px;
  padding: 15px;
  margin-bottom: 25px;
  border-radius: 20px;
  margin-inline: auto;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-5)"};
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "var(--ds-light-5)" : "var(--ds-dark-2)"};
}

.categoriesList li {
  font-weight: 600;
  cursor: pointer;
  margin: 5px; /* Espaçamento entre os itens */
}

.categoriesList li:hover,
.categoriesList li.active {
  color: var(--ds-blood);
}

/* Responsividade */
@media (max-width: 768px) {
  .categoriesList {
    flex-direction: column; /* Itens empilhados em telas menores */
    padding: 10px;
  }

  .categoriesList li {
    margin: 10px 0; /* Mais espaço entre os itens */
  }
}

@media (max-width: 480px) {
  .categoriesList {
    padding: 8px;
  }

  .categoriesList li {
    font-size: 14px; /* Ajuste no tamanho da fonte */
  }
}

    
  
`;
