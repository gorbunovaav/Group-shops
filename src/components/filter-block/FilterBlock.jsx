import s from './FilterBlock.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    
//   border: `1px solid ${theme.palette.divider}`, бордер по периметру
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'    цвет заливки серый
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)', бордер под шапкой при раскрытии
}));

export default function FilterBlock() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={s.filterTitle}>Наличие #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className={s.catagoriesWrap}>
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.categoriesText}>В наличие</p>
                    </div>
                
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.categoriesText}>Под заказ</p>
                    </div>
                </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Новинки #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.newsWrap}>
                <div className={s.schoice}>
                    <Checkbox/>
                    <p className={s.newsText}>Все</p>
                </div>
                
                <div className={s.schoice}>
                    <Checkbox/>
                    <p className={s.newsText}>Новинки</p>
                </div>

                <div className={s.schoice}>
                    <Checkbox/>
                    <p className={s.newsText}>Акции</p>
                </div>

               
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Цена #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          блаблабла
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Бренд #4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className={s.brendWrap}>
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.brendText}>BRP</p>
                    </div>
                
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.brendText}>Spark 2</p>
                    </div>

                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.brendText}>Spark 3</p>
                    </div>
                   
                </div> 
                <a href="">Показать еще</a>
          </Typography>
        </AccordionDetails>
  </Accordion>

   <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
         <Typography>Модель #5</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <Typography>
      <div className={s.modelChois}>
                <input  type="text" placeholder="Введите модель" />
           </div>
            
          <div className={s.modelWrap}>
            
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.modelText}>Sea-doo Spark 2</p>
                    </div>
                
                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.modelText}>SeaDoo GTI 155</p>
                    </div>

                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.modelText}>SeaDoo Spark 90 </p>
                    </div>

                    <div className={s.schoice}>
                        <Checkbox/>
                        <p className={s.modelText}>SeaDoo GTR 230</p>
                    </div>
                   
                </div>  
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Акции #6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            блаблабла 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Акции #7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            блаблабла 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}