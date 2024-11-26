import React from 'react';
import { FaceLivenessDetector } from '@aws-amplify/ui-react-liveness';
import { Loader, ThemeProvider } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export const customLivenessDisplayText: Required<LivenessDisplayText> = {
  cameraMinSpecificationsHeadingText: 'Камера не соответствует минимальным требованиям',
  cameraMinSpecificationsMessageText:
    'Камера должна поддерживать разрешение не менее 320×240 и 15 кадров в секунду.',
  cameraNotFoundHeadingText: 'Камера недоступна',
  cameraNotFoundMessageText:
    'Убедитесь, что камера подключена и не используется другим приложением. Возможно, вам нужно предоставить разрешение на использование камеры в настройках, закрыть все вкладки браузера и попробовать снова.',
  a11yVideoLabelText: 'Веб-камера для проверки подлинности лица',
  cancelLivenessCheckText: 'Отменить проверку подлинности лица',
  goodFitCaptionText: 'Хорошая посадка',
  goodFitAltText:
    'Иллюстрация лица человека, идеально вписанного в овал.',
  hintCenterFaceText: 'Выравнивайте лицо по центру',
  hintCenterFaceInstructionText:
    'Инструкция: Перед началом проверки убедитесь, что камера находится в центре верхней части экрана, и вы выровняли лицо по центру камеры. Когда начнется проверка, в центре появится овал. Вам предложат приблизить лицо к овалу, а затем удерживать неподвижность. Через несколько секунд вы услышите сообщение о завершении проверки.',
  hintFaceOffCenterText: 'Лицо находится вне овала, выравнивайте лицо по центру камеры.',
  hintMoveFaceFrontOfCameraText: 'Поместите лицо перед камерой',
  hintTooManyFacesText: 'Убедитесь, что перед камерой только одно лицо',
  hintFaceDetectedText: 'Лицо обнаружено',
  hintCanNotIdentifyText: 'Поместите лицо перед камерой',
  hintTooCloseText: 'Отодвиньтесь назад',
  hintTooFarText: 'Приблизьтесь',
  hintConnectingText: 'Подключение...',
  hintVerifyingText: 'Проверка...',
  hintCheckCompleteText: 'Проверка завершена',
  hintIlluminationTooBrightText: 'Переместитесь в менее яркое место',
  hintIlluminationTooDarkText: 'Переместитесь в более яркое место',
  hintIlluminationNormalText: 'Освещение нормальное',
  hintHoldFaceForFreshnessText: 'Сохраняйте неподвижность',
  hintMatchIndicatorText: '50% завершено. Продолжайте двигаться ближе.',
  photosensitivityWarningBodyText:
    'Эта проверка включает мигание цветов. Будьте осторожны, если у вас есть фоточувствительность.',
  photosensitivityWarningHeadingText: 'Предупреждение о фоточувствительности',
  photosensitivityWarningInfoText:
    'Некоторые люди могут испытывать эпилептические припадки при воздействии цветных огней. Будьте осторожны, если у вас или у кого-либо из вашей семьи есть эпилепсия.',
  photosensitivityWarningLabelText: 'Подробнее о фоточувствительности',
  photosensitivyWarningBodyText:
    'Эта проверка включает мигание цветов. Будьте осторожны, если у вас есть фоточувствительность.',
  photosensitivyWarningHeadingText: 'Предупреждение о фоточувствительности',
  photosensitivyWarningInfoText:
    'Некоторые люди могут испытывать эпилептические припадки при воздействии цветных огней. Будьте осторожны, если у вас или у кого-либо из вашей семьи есть эпилепсия.',
  photosensitivyWarningLabelText: 'Подробнее о фоточувствительности',
  retryCameraPermissionsText: 'Повторить попытку',
  recordingIndicatorText: 'Запись',
  startScreenBeginCheckText: 'Начать видеопроверку',
  tooFarCaptionText: 'Слишком далеко',
  tooFarAltText:
    'Иллюстрация лица человека внутри овала; есть зазор между границами лица и овала.',
  waitingCameraPermissionText: 'Ожидание разрешения на использование камеры.',
  errorLabelText: 'Ошибка',
  connectionTimeoutHeaderText: 'Время ожидания истекло',
  connectionTimeoutMessageText: 'Соединение прервано из-за превышения времени ожидания.',
  timeoutHeaderText: 'Время истекло',
  timeoutMessageText:
    'Лицо не вписалось в овал в установленное время. Попробуйте снова, полностью заполнив овал лицом.',
  faceDistanceHeaderText: 'Обнаружено движение вперед',
  faceDistanceMessageText: 'Избегайте приближения во время подключения.',
  multipleFacesHeaderText: 'Обнаружено несколько лиц',
  multipleFacesMessageText: 'Убедитесь, что перед камерой находится только одно лицо.',
  clientHeaderText: 'Клиентская ошибка',
  clientMessageText: 'Проверка завершилась ошибкой из-за проблем с клиентом.',
  serverHeaderText: 'Серверная ошибка',
  serverMessageText: 'Невозможно завершить проверку из-за ошибки сервера.',
  landscapeHeaderText: 'Альбомная ориентация не поддерживается',
  landscapeMessageText:
    'Переверните устройство в портретную (вертикальную) ориентацию.',
  portraitMessageText:
    'Убедитесь, что ваше устройство остается в портретной (вертикальной) ориентации на протяжении проверки.',
  tryAgainText: 'Попробовать снова',
};


export function LivenessQuickStartReact() {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate(); // Для навигации между страницами
  const [createLivenessApiData, setCreateLivenessApiData] =
    React.useState(null);

  const fetchCreateLiveness = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/rekognition/session/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Создана новая сессия:', data);
      setCreateLivenessApiData({ sessionId: data.session_id });
      setLoading(false);
    } catch (error) {
      console.error('Не удалось создать сессию:', error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    try {
      // Получаем userIIN из localStorage
      const userIIN = localStorage.getItem('userIIN');
  
      if (!userIIN) {
        console.error('ИИН пользователя не найден в localStorage');
        return;
      }
  
      // Формируем запрос с userIIN
      const response = await fetch(
        `http://127.0.0.1:8000/api/rekognition/session/${createLivenessApiData.sessionId}/?id_document=${userIIN}`
      );
  
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Результаты анализа:', data);
  
      // Логика обработки результатов
      const { confidence, compare_face_result, status } = data;
      const average_similarity = compare_face_result?.average_similarity || 0;
  
      if (status === 'SUCCEEDED') {
        if (confidence > 50) {
          if (average_similarity === 0) {
            // Если confidence > 50, но average_similarity = 0
            alert('Лицо не распознано. Повторите видео проверку.');
            handleRetry(); // Перезапуск видеопроверки
          } else if (average_similarity === 100) {
            // Если confidence > 50 и average_similarity = 100
            alert('Проверка завершена успешно.');
            navigate('/home'); // Перенаправление на страницу Home
          } else {
            // Если confidence > 50, но average_similarity имеет другое значение
            alert(
              `Распознавание частично успешно (схожесть: ${average_similarity}%). Попробуйте еще раз.`
            );
            handleRetry(); // Перезапуск видеопроверки
          }
        } else if (confidence === 0) {
          // Если confidence = 0
          alert('Лицо не найдено. Повторите видео проверку.');
          handleRetry(); // Перезапуск видеопроверки
        } else {
          // Если confidence ≤ 50, но не 0
          alert('Уровень уверенности слишком низкий. Повторите видео проверку.');
          handleRetry(); // Перезапуск видеопроверки
        }
      } else {
        console.error('Ошибка анализа, статус:', status);
        alert('Проверка завершилась ошибкой. Повторите видео проверку.');
        handleRetry(); // Перезапуск видеопроверки
      }
    } catch (error) {
      console.error('Ошибка при анализе:', error);
      alert('Ошибка при обработке данных. Повторите попытку.');
      handleRetry(); // Перезапуск видеопроверки
    }
  };
  
  // Функция для перезапуска видеопроверки
  const handleRetry = () => {
    setLoading(true);
    setCreateLivenessApiData(null);
    fetchCreateLiveness(); // Перезапуск сессии
  };
  
  const handleCancel = () => {
    console.log('Проверка отменена пользователем.');
    handleRetry();
  };

  return (
    <ThemeProvider>
      <div className="liveness-container">
        {loading ? (
          <Loader />
        ) : (
          <FaceLivenessDetector
            sessionId={createLivenessApiData.sessionId}
            region="us-east-1"
            displayText={customLivenessDisplayText}
            onAnalysisComplete={handleAnalysisComplete}
            onError={(error) => console.error('Ошибка:', error)}
            onUserCancel={handleCancel}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

