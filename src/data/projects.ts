export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  metric: string;
  tags: string[];
  problemStatement: string;
  engineeringApproach: string;
  toolsUsed: string[];
  methodology: string[];
  results: string[];
  keyLearnings: string;
  chartData: {name: string;before: number;after: number;}[];
  images?: string[];
}

export const projectsData: Project[] = [
{
  id: 'p1',
  slug: 'route-optimization-engine',
  title: 'Route Optimization',
  category: 'Route Optimization',
  summary:
  'Developed a Python and Excel-based VRP tool to optimize 404+ customer deliveries, significantly improving distribution efficiency.',
  metric: ' Cost Reduction & On-time Delivery',
  tags: ['Python', 'Excel', 'VRP', 'powerBI'],
  problemStatement:
  'The delivery network for 404 retail locations across Sri Lanka was not fully optimized, leading to inefficient routes, underutilized vehicle capacity, and increased travel time and costs.',
  engineeringApproach:
  'Developed a route optimization solution by dividing the country into 9 major routes and sub-routes, and using Python to identify shortest paths while considering vehicle capacity and delivery demand.',
  toolsUsed: ['Python (for route optimization and shortest path calculation)', 'Excel (for data organization and planning)', 'Google Maps (for location reference and distance validation)'],
  methodology: [
    '✓ Collected and organized customer order data by location',
    '✓ Divided delivery network into major routes and sub-routes',
    '✓ Used Python algorithms to determine shortest delivery paths',
    '✓ Analyzed vehicle capacity vs. demand to improve load utilization',
    '✓ Coordinated with sales team to consolidate orders when vehicles were not fully loaded',
    '✓ Developed a vehicle scheduling plan for efficient multi-day deliveries'
  ],
  results: [
    'Improved route efficiency',
    'Reduced travel time and distance',
    'Increased vehicle utilization',
    'Optimized delivery routes',
    'Better coordination with sales team',
    'Reduced empty vehicle runs',
    'Improved delivery planning accuracy'
  ],

  keyLearnings:
  'Effective logistics planning is not only about finding the shortest path, but also about maximizing vehicle utilization and coordination between teams to reduce overall operational cost and improve delivery efficiency.',
  chartData: [
  { name: 'Mileage (km)', before: 1200, after: 984 },
  { name: 'Fuel Cost ($)', before: 450, after: 342 },
  { name: 'Planning Time (h)', before: 4, after: 1 }]

},
{
  id: 'p2',
  slug: 'warehouse-layout-optimization',
  title: 'Warehouse Layout Optimization',
  category: 'Warehouse Systems',
  summary:
  'Redesigned Pipe & Tyre warehouse layouts and implemented a bin card system to improve accessibility and reduce handling time.',
  metric: 'Tracking Accuracy & Efficiency',
  tags: ['AutoCAD', 'Inventory Management', 'Process Design'],
  problemStatement:
  'The raw material warehouse was disorganized, materials were hard to find, and only one worker knew the locations. This caused delays, poor inventory control, and inefficiency.',
  engineeringApproach:
  'Redesigned the warehouse layout by creating a structured storage system with clear locations, and introduced Kanban with FIFO to improve inventory flow and control.',
  toolsUsed: ['Excel (for layout planning and tracking)', 'Manual layout design methods', 'AutoCAD (for 3D visualization and design)', 'Bin card','Visual labeling system'],
  methodology: [
    ' Observed current warehouse operations and identified issues',
    ' Cleaned and reorganized the storage area',
    ' Created numbered storage locations for easy tracking',
    ' Separated materials into a quarantine area when needed',
    ' Implemented Kanban system with FIFO',
    ' Monitored daily operations to ensure proper usage'
  ],
  results: [
    ' Improved material visibility',
    ' Reduced searching time',
    ' Better inventory control',
    ' Improved warehouse organization',
    ' Easier tracking of materials',
    ' Reduced dependency on specific workers',
    ' Improved operational efficiency'
  ],

  keyLearnings:
  'Simple improvements in layout and visibility can significantly improve efficiency, control, and workflow in warehouse operations.',
  chartData: [
  { name: 'Pick Time (min)', before: 12, after: 7.8 },
  { name: 'Travel Dist (m)', before: 450, after: 210 },
  { name: 'Stock Accuracy (%)', before: 85, after: 99 }]

},
{
  id: 'p3',
  slug: 'erp-implementation-support',
  title: 'ERP Implementation Support',
  category: 'Systems Integration',
  summary:
  'Supported Odoo ERP implementation by aligning real workflows across sales, inventory, and production, and enabling adoption through SOPs and hands-on training.',
  metric: 'Data Visibility & Efficiency',
  tags: ['Odoo ERP', 'Process Mapping', 'Staff Training'],
  problemStatement:
  'Many departments operated in silos using disconnected spreadsheets, resulting in production delays, overpromising to clients, and duplicate data across departments.',
  engineeringApproach:
  'Mapped the end-to-end order-to-cash process and configured Odoo ERP modules to enable seamless data flow between sales, inventory, and production, ensuring system alignment with real operational workflows.',
  toolsUsed: ['Odoo ERP', 'Microsoft Word', 'PowerPoint'],
  methodology: [
    '✓ Conducted as-is process mapping and gap analysis',
    '✓ Configured and tested ERP modules in a sandbox environment',
    '✓ Migrated data from legacy spreadsheet-based systems',
    '✓ Developed SOPs/documentation and delivered hands-on staff training to support system adoption'
  ],
  results: [
    ' Eliminated manual data entry between departments',
    ' Reduced order processing time',
    ' Achieved 100% real-time production visibility for the sales team',
    ' Successfully trained 10+ staff across 3 departments'
  ],

  keyLearnings:
  '“Successful ERP implementation is 20% system configuration and 80% change management — driven by clear documentation and effective user training.”',
  chartData: [
  { name: 'Order Processing (h)', before: 48, after: 4 },
  { name: 'Data Errors/Mo', before: 120, after: 5 },
  { name: 'Visibility (%)', before: 30, after: 100 }]

},
{
  id: 'p4',
  slug: 'production-efficiency-improvement',
  title: 'Production Efficiency Improvement',
  category: 'Process Improvement',
  summary:
  'Conducted time & motion studies and bottleneck analysis to redesign process flows and increase manufacturing throughput.',
  metric: 'Throughput Increase',
  tags: ['Time Study', 'Bottleneck Analysis'],
  problemStatement:
  'A manufacturing line was consistently missing daily production targets despite running at full capacity, indicating hidden inefficiencies and bottlenecks.',
  engineeringApproach:
  'Utilized Lean manufacturing principles, specifically time and motion studies, to identify non-value-added activities and balance the production line.',
  toolsUsed: ['Stopwatch/Video Analysis', 'Minitab', 'Value Stream Mapping'],
  methodology:[
  '1. Recorded and analyzed cycle times for all workstations. 2. Identified the primary bottleneck workstation. 3. Reallocated tasks to balance operator workload (Line Balancing). 4. Implemented 5S at workstations to reduce tool search time.'],
  results: [
  'Increased overall line throughput',
  'Reduced cycle time variance',
  'Eliminated daily overtime requirement',
  'Improved operator ergonomics by redesigning workstation layouts'],

  keyLearnings:
  'Small incremental changes at the bottleneck yield massive system-wide improvements. Focusing on non-bottleneck stations is often wasted effort.',
  chartData: [
  { name: 'Units/Day', before: 450, after: 531 },
  { name: 'Cycle Time (s)', before: 120, after: 98 },
  { name: 'Overtime (h/wk)', before: 10, after: 0 }]

},
{
  id: 'p5',
  slug: 'rural-road-infrastructure',
  title: 'Rural Road Infrastructure Supervision',
  category: 'Civil Project Execution',
  summary:
  'Civil project execution and site supervision for an 18 km rural road under the national rural development program, ensuring quality, safety, and schedule control through structured reporting and QA/QC.',
  metric: '8 km Delivered',
  tags: ['Civil Engineering', 'Project Management', 'QA/QC', 'Site Supervision'],
  problemStatement:
  'The construction of an 18 km rural road under the national rural development program faced coordination challenges, potential delays, and quality risks due to limited on-site supervision and inconsistent contractor practices.',
  engineeringApproach:
  'Applied structured project management and site supervision techniques, including daily inspections, QA/QC controls, and standardized reporting systems to ensure alignment with design specifications, safety standards, and project timelines.',
  toolsUsed: [
    'Documentation & Reporting Tools',
    'Engineering Drawings',
    'Field Inspection Tools'
  ],
  methodology: [
    '✓ Monitored project progress against baseline schedule and key milestones',
    '✓ Conducted daily site inspections to ensure quality and compliance',
    '✓ Implemented QA/QC checks for materials, compaction, and grading',
    '✓ Prepared and submitted daily progress reports to the site engineer',
    '✓ Coordinated with contractors and stakeholders through regular progress meetings'
  ],
  results: [
    ' Delivered remaining 8 km within schedule and revised budget',
    ' Passed all independent quality audits (compaction & grading standards)',
    ' Strengthened contractor coordination and site discipline'
  ],

  keyLearnings:
  '“Effective site supervision combines technical control with proactive communication—early issue detection prevents costly delays and rework.”',
  chartData: [
  { name: 'Schedule Variance (days)', before: 45, after: 0 },
  { name: 'Failed QA Tests/Mo', before: 12, after: 1 },
  { name: 'Safety Incidents', before: 3, after: 0 }]

},
{
  id: 'p6',
  slug: 'smart-warehouse-automation-system',
  title: 'Smart Warehouse Automation System',
  category: 'Robotics-Enabled Picking Optimization',
  summary:
  'Developed a novel storage and retrieval concept integrated with a low-cost autonomous robotic system to optimize picking/put-away, reduce travel time, and improve internal material flow.',
  metric: '45% Cost Driver Targeted',
  tags: [
    'Warehouse Automation',
    'Arduino Robotics',
    'Systems Design',
    'Process Optimization'
  ],
  problemStatement:
  'Warehouse picking and put-away operations account for approximately 45% of total operational cost, driven by inefficient travel paths, manual handling, and limited automation in traditional storage systems.',
  engineeringApproach:
  'Developed a warehouse storage and retrieval concept integrated with a low-cost autonomous robotic system to reduce travel time, improve material flow, and enhance operational efficiency through intelligent layout design and robotic assistance.',
  toolsUsed: [
    'Arduino Microcontroller',
    'AutoCAD',
    'python for data analysis',
    'Simulation Software',
    'microsoft excel'
  ],
  methodology: [
    '✓ Designed an optimized storage layout concept to improve accessibility and reduce travel distance',
    '✓ Developed a line-following robotic system for automated material movement within warehouse paths',
    '✓ Integrated vertical motion capability for multi-level picking and storage operations',
    '✓ Implemented Arduino-based control system for sensor-guided navigation and automation logic',
    '✓ Evaluated system performance based on picking efficiency and operational flow improvement'
  ],
  results: [
    ' Significant reduction in picking and put-away cycle time',
    ' Improved internal material flow efficiency',
    ' Reduced manual travel distance within warehouse operations',
    ' Demonstrated feasibility of low-cost semi-automated warehouse systems',
    ' Targeting reduction of major operational cost drivers (~45%)'
  ],

  keyLearnings:
  '“Combining intelligent layout design with low-cost robotics can significantly improve warehouse efficiency, even without full-scale industrial automation systems.”',
  chartData: [
  { name: 'Pick & Put-away (min)', before: 12, after: 7 },
  { name: 'Travel Distance (m)', before: 450, after: 210 },
  { name: 'Manual Handling (%)', before: 100, after: 55 }]

}];