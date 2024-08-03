import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { AttemptsComponent } from './pages/admin/attempts/attempts.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { QuestionsComponent } from './pages/admin/questions/questions.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { PreExamInterfaceComponent } from './pages/user/pre-exam-interface/pre-exam-interface.component';
import { QuizCategoriesComponent } from './pages/user/quiz-categories/quiz-categories.component';
import { ShowAllQuizzesComponent } from './pages/user/show-all-quizzes/show-all-quizzes.component';
import { ShowQuizzesComponent } from './pages/user/show-quizzes/show-quizzes.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { SubmissionsComponent } from './pages/user/submissions/submissions.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserComponent } from './pages/user/user.component';
import { AdminGuard } from './service/Guards/admin.guard';
import { rootGuard } from './service/Guards/root.guard';
import { UserGuard } from './service/Guards/user.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: RegisterComponent,
    title: 'Register',
    canActivate: [rootGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [rootGuard]
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [rootGuard],
    title: 'Home',
  },
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    title: 'Admin Dashboard',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminhomeComponent,
        title: 'Home',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'Categories',
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        title: 'Add Category',
      },
      {
        path: 'quizzes',
        component: QuizzesComponent,
        title: 'Quizzes',
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
        title: 'Add Quiz',
      },
      {
        path: 'update-quiz/:qid',
        component: UpdateQuizComponent,
        title: 'Update Quiz',
      },
      {
        path: 'update-category/:cid',
        component: UpdateCategoryComponent,
        title: 'Update Category',
      },
      {
        path: 'questions/:qid/:title',
        component: QuestionsComponent,
        title: 'Questions',
      },
      {
        path: 'questions/:qid/:title/add-question',
        component: AddQuestionComponent,
        title: 'Add Question',
      },
      {
        path: 'update-question/:quesId',
        component: UpdateQuestionComponent,
        title: 'Update Question',
      },
      {
        path: 'attempts/:qid/:title',
        component: AttemptsComponent,
        title: 'Attempts',
      }
    ],
  },
  {
    path: 'user-dashboard',
    component: UserComponent,
    title: 'User Dashboard',
    canActivate: [UserGuard],
    children: [
      {
        path: '',
        component: UserHomeComponent,
        title: 'Home',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
      },
      {
        path: 'categories',
        component: QuizCategoriesComponent,
        title: 'Quiz Categories',
      },
      {
        path: 'quizzes/:cid/:title',
        component: ShowQuizzesComponent,
        title: 'Quizzes',
      },
      {
        path: 'all-quizzess',
        component: ShowAllQuizzesComponent,
        title: 'All Quizzess',
      },
      {
        path: 'start-exam/:qid/:title',
        component: PreExamInterfaceComponent,
        title: 'Start Exam',
      },
      {
        path: 'submissions',
        component: SubmissionsComponent,
        title: 'Submissions',
      }
    ],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  },
  {
    path: 'exam/:qid/:title',
    component: StartExamComponent,
    title: 'Exam',
    canActivate: [UserGuard],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
