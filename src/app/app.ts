import { Component, AfterViewInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Signals for simple state (active section highlighting, modal toggles, etc.)
  activeSection = signal<string>('home');
  showResume = signal<boolean>(false);

  // === Portfolio Data (edit this block) =============================
  name = 'Melvin Savio V X';
  role = 'Full‑Stack & Data Engineer';
  location = 'India';
  summary = `I design and ship end‑to‑end solutions across web, cloud, and data. Strong in Angular + .NET + SQL on the
  engineering side; Python + ML/DL/NLP + Power BI on the data side; Azure for deployment and DevOps.`;

  // Skills grouped by category
  skills: { category: string; items: string[] }[] = [
    { category: 'Languages', items: ['TypeScript', 'C#', 'Python'] },
    { category: 'Frontend', items: ['Angular', 'RxJS', 'HTML5', 'CSS3', 'SCSS'] },
    { category: 'Backend', items: ['ASP.NET Core', 'REST APIs', 'Entity Framework', 'Node.js (basics)'] },
    { category: 'Databases', items: ['MS SQL Server', 'MySQL'] },
    { category: 'Cloud & DevOps', items: ['Azure App Service', 'Azure Functions'] },
    { category: 'Data & AI', items: ['Pandas', 'scikit‑learn', 'TensorFlow/Keras', 'NLP (spaCy)', 'Power BI'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Jupyter', 'Excel (Advanced)'] },
  ];

  // 9 sample projects — replace with your real ones
  projects: Array<{
    title: string;
    when: string;
    tags: string[];
    description: string;
    keyfeature: string;
    links?: { demo?: string; repo?: string };
  }> = [
    {
      title: 'Banking Management System',
      when: '2025',
      tags: ['MYSQL'],
      description:
        'Developed a SQL-based Banking Management System managing customers, accounts, loans, and transactions with triggers, procedures, and reports.',
      keyfeature: 'Improved data integrity, security, automation, and analytical reporting efficiency.'
    },
    {
      title: 'Iris Flower Classification (KNN)',
      when: '2025',
      tags: ['Python 3', 'NumPy, Pandas', 'Scikit-learn', 'Matplotlib, Seaborn', 'Joblib'],
      description: 
         'Machine Learning project that classifies iris flowers into three species: Setosa, Versicolor, and Virginica, based on their sepal and petal measurements. The project demonstrates the full ML workflow — from loading data, exploring and visualizing it, training a model, evaluating performance, to saving the trained model for later use.',
      keyfeature: 'End-to-end ML pipeline with K-Nearest Neighbors (KNN); data preprocessing, visualization, model evaluation with accuracy and confusion matrix; trained model and scaler saved for future predictions.'
    },
    {
      title: 'NLP Resume Screener',
      when: '2024',
      tags: ['Python', 'spaCy', 'Keras', 'Azure Blob'],
      description:
        'Named‑entity extraction for skills/experience; similarity scoring to job JD; exports shortlists to Excel & MySQL for audit.',
      keyfeature: 'Cut manual screening time by ~60% while improving consistency.'
    },
    {
      title: 'Sales Forecasting Service',
      when: '2023',
      tags: ['Python', 'Prophet', 'FastAPI', 'Docker', 'Azure'],
      description:
        'Time‑series API wrapped with FastAPI; containerized; CI/CD to Azure Container Apps; consumed by Power BI via REST.',
      keyfeature: '±8% MAPE across 14 product families; automated weekly refresh.'
    },
    {
      title: 'IoT Metrics Portal',
      when: '2023',
      tags: ['Angular', 'SignalR', 'Azure IoT Hub', 'MSSQL'],
      description:
        'Realtime device telemetry dashboard with role‑based access and anomaly alerts via SignalR and Functions.',
      keyfeature: 'Surfaced downtime anomalies 20 minutes earlier on average.'
    },
    {
      title: 'Expense Manager',
      when: '2022',
      tags: ['Angular', 'ASP.NET Core', 'MySQL', 'JWT'],
      description:
        'Personal finance SPA with CRUD, budgets, and export to Excel; deployed on Azure App Service + MySQL Flexible Server.',
      keyfeature: 'Adopted by a small team; simplified monthly reconciliation.'
    },
    {
      title: 'Support Ticket Classifier',
      when: '2022',
      tags: ['Python', 'NLP', 'sklearn', 'Flask', 'Power BI'],
      description:
        'Multi‑label text classifier; exposed via Flask; Power BI calls the API to enrich reports with categories/urgency.',
      keyfeature: 'Auto‑routed 35% tickets with improved SLA compliance.'
    },
    {
      title: 'Marketing Attribution Model',
      when: '2021',
      tags: ['Python', 'Pandas', 'SQL', 'Power BI'],
      description:
        'Rule‑based + data‑driven attribution; SQL ETL, DAX measures, and BI visuals with drill‑through to campaigns.',
      keyfeature: 'Made spend re‑allocation decisions that lifted ROAS by ~12%.'
    },
    {
      title: 'HR Insights Workbook',
      when: '2021',
      tags: ['Excel', 'Power Query', 'Power BI'],
      description:
        'Excel/Power BI combo for attrition and hiring pipeline tracking; parameterized refresh to SQL and CSV sources.',
      keyfeature: 'Self‑serve analytics for HR; reduced ad‑hoc asks by 40%.'
    },
  ];

  certifications = [
    'completed a certified angular course at besaant technology',
    'Workshop on Python – Certificate of Excellence (UNIQ Technologies)'
  ];

  experience = [
    {
      title:'Internship – Python & Data Science (Spiro Prime Tech Services)',
      years:'2015 - 2020',
    },
    {
      title:'Internship – Python with Machine Learning (UNIQ Technologies)',
      years:'2018 - 2023',
    },{
      title:'Internship – Angular & .NET Developer (Evlai Infotech)',
      years:'2022 - 2025',
    }
  ]

  contacts = {
    email: 'melvinsaviovx@gmail.com',
    github: 'https://github.com/melvinsaviovx',
    linkedin: 'https://www.linkedin.com/in/melvin-savio-v-x-94869b219',
  };
  // ==================================================================

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Active section highlight on scroll
      const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
      const onScroll = () => {
        const y = window.scrollY + 120; 
        for (const s of sections) {
          const top = s.offsetTop;
          const bottom = top + s.offsetHeight;
          if (y >= top && y < bottom) { this.activeSection.set(s.id); break; }
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }
}
